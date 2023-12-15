export default interface IRegistrationRequest{
    email: string,
    username: string,
    password: string,
    //milliseconds utc
    birthdayDate: Date
}