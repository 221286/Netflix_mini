export const validation = (mail,password)=>{
    //const is_name_valid = /b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)$/gm.test(name);
    const is_email_valid = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    .test(mail);
    const is_password_valid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
    
    if(is_email_valid  || is_password_valid){
        if(!is_email_valid){
        return "Email is not valid";
        } 
         



        if(!is_password_valid){
        return "Not a valid password";
        } else
        return null;
    }
    else 
    return "Neither email nor password is valid";



}