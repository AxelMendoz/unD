    import { Injectable } from '@nestjs/common';
    import { PassportStrategy } from '@nestjs/passport';
    import { ExtractJwt, Strategy } from 'passport-jwt';
    import { PrismaService } from '../../prisma/prisma.service';
    import { JwtPayload } from '../interfaces/jwt-payload.interface'; // Crea la interfaz

    @Injectable()
    export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'secretKey',  // Usa la misma clave que en JwtModule
        });
    }

    async validate(payload: JwtPayload) {
        // Valida el payload del token JWT
        return this.prisma.usuario.findUnique({
        where: { email: payload.email },
        });
    }
    }
