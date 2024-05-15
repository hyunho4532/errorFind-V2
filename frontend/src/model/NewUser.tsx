export class NewUser {

    authuid: string
    nickname: string
    email: string
    position: string
    errorhandler: string

    constructor(authuid: string, nickname: string, email: string, position: string, errorhandler: string) {
        this.authuid = authuid,
        this.nickname = nickname,
        this.email = email,
        this.position = position,
        this.errorhandler = errorhandler
    }
}