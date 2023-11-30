export default interface IRegistrationRequest{
    email: string,
    username: string,
    password: string,
    //milliseconds utc
    birthday: Date
}