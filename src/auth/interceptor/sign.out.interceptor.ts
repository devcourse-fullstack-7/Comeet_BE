import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";
import { Response } from "express";

@Injectable()
export class SignOutInterceptor implements NestInterceptor<void, void> {
    private readonly _logger: Logger = new Logger(SignOutInterceptor.name);

    intercept(ctx: ExecutionContext, next: CallHandler<void>): Observable<void> {
        const res = ctx.switchToHttp().getResponse<Response>();

        return next.handle().pipe(
            tap(() => {
                this._logger.debug(res);
                res.clearCookie("REFRESH_TOKEN");
            })
        );
    }
}