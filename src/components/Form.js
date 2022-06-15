import React from 'react';
import { useForm } from 'react-hook-form';


export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const data = {
        firstname: "",
        lastname: "",
        email: "",
        developer: false,
        color: ""
    };
    
    const onSubmit = data => console.log('Thanks!')

    return(
        <div class="formfield">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div class="firstname">
                    <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} /><br />
                </div>
                <br />
                <div class="lastname">
                    <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} /><br />
                </div>
                <br />
                <div class="email">
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /><br />
                </div>
                <br />
                <div class="developer">
                    <p>Are you a Developer?</p>
                    <p>Yes     No</p>
                    <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                    <input {...register("Developer", { required: true })} type="radio" value="No" />
                </div>
                <br />
                <div class="color">
                    <p>What is your Favorite color?</p>
                        <p>Green Red Blue</p>
                        <input {...register("Favorite color?")} type="radio" value="Green" class="option" />
                        <input {...register("Favorite color?")} type="radio" value="Red" class="option" />
                        <input {...register("Favorite color?")} type="radio" value="Blue" class="option" />
                </div>
                <br />
                <div class="submit">
                <input type="submit" value="Submit" onSubmit={onSubmit} />
                </div>
            </form>
        </div>
    )
}
