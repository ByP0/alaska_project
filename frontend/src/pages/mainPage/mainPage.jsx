import poster from '../../images/poster.png'
import logo from '../../images/logo.png'
import phone2 from '../../images/phone2.svg'
import './mainPage.css'
import * as yup from "yup"
import  { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

export const MainPage=()=>{


     const sendFormDate=yup.object().shape({
        email: yup
        .string()
        .email('Введите корректный email') 
        .required('Заполните email') 
        .max(50, 'Email не может содержать более 50 символов'),
        question: yup
        .string()
        .min(10)
        .max(500)
        .required()
    })

   

    const{register,handleSubmit,formState:{errors}}=useForm({
        defaultValues:{
            email:'',
            question:''
        },
        resolver:yupResolver(sendFormDate)
    })

    const onSubmit=({email,question})=>{
        fetch('',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({email:email,question:question})
        })
    }

    const formError=errors?.password?.message||errors?.name?.message||errors?.email?.message

 
    return(
        <div className="main-containers">
            <div className='content'>
            <div>
                <img src={poster} className='poster'/>
            </div>
            <div className='presave'>
                <h2 className='title-presave'>ПРЕСЕЙВ</h2>
                <img src={logo} className='logo'/>
            </div>
            <div className='text'>
            <span className='text-content'>текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                </span>
                <br/>
                <br/>
            <span className='text-content'>текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                    текст текст текст текст текст текст текст
                </span>
            </div>
            <div className='number-section'>
                <img src={phone2} className='telephone'/>
                <section className='phone-number'>+7(909)-999-99-99</section>
            </div>
            </div>
              <footer>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Связаться с нами </h2>
                    <div>
                        <label>Ваш email</label>
                        <input {...register('email')}/>
                        {formError}
                    </div>
                    <input {...register('question')}/>
                </form>
            </footer>
        </div>
    )
}