import React from 'react';
import { useForm } from 'react-hook-form';


export const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log('Thanks!')
    console.log(errors);

    return(
        <div class="formfield">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="buttonfield">
                    <input type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} /><br />
                </div>
                <br />
                <div class="buttonfield">
                    <input type="text" placeholder="Last name" {...register("Last name", { required: true, maxLength: 100 })} /><br />
                </div>
                <br />
                <div class="buttonfield">
                    <input type="text" placeholder="Email" {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} /><br />
                </div>
                <br />
                <div class="buttonfield-big">
                    <p>Are you a Developer?</p>
                    <p>Yes     No</p>
                    <input {...register("Developer", { required: true })} type="radio" value="Yes" />
                    <input {...register("Developer", { required: true })} type="radio" value="No" />
                </div>
                <br />
                <div class="buttonfield-big">
                    <p>What is your Favorite color?</p>
                        <p>Green Red Blue</p>
                        <input {...register("Favorite color?")} type="radio" value="Green" class="option" />
                        <input {...register("Favorite color?")} type="radio" value="Red" class="option" />
                        <input {...register("Favorite color?")} type="radio" value="Blue" class="option" />
                </div>
                <br />
                <div class="buttonfield">
                <input type="submit" value="Submit" onSubmit={onSubmit} />
                </div>
            </form>
        </div>
    )
}
