import { useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailConfirm, setEmailConfirm] = useState('')
    const [phone, setPhone] = useState('')

    const formSchema = Yup.object().shape({
        email: Yup.string()
          .required('Email requerido'),
        emailConfirm: Yup.string()
          .required('Email requerido')
          .oneOf([Yup.ref('email')], 'El email no coincide'),
      })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState
    
    const handleForm = (e) => {
        const userInfo = {
            name, email, emailConfirm, phone
        }
        onConfirm(userInfo)
    }
    return (
       <div className="flex flex-col justify-center content-start items-center">
        <h2 className="text-center my-10 text-xl">Completa el formulario para terminar la compra</h2>
            <form onSubmit={handleSubmit(handleForm)} className="w-96">
            <div className="mb-6">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                    <input type="name" value={name} onChange={e => setName(e.target.value)} id="name" className="border border-green text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                    <input type="email" value={email}  {...register('email')} onChange={e => setEmail(e.target.value)} id="email" className="border border-green text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@name.com" required/>
                    <div className="text-sm text-error font-medium">{errors.email?.message}</div>
                </div>
                <div className="mb-6">
                    <label htmlFor="emailConfirm" className="block mb-2 text-sm font-medium">Confirmar email</label>
                    <input type="emailConfirm" value={emailConfirm} {...register('emailConfirm')} onChange={e => setEmailConfirm(e.target.value)} id="emailConfirm" className="border border-green text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                    <div className="text-sm text-error font-medium">{errors.emailConfirm?.message}</div>
                </div>
                <div className="mb-6">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">Phone</label>
                    <input type="phone" value ={phone} onChange={e => setPhone(e.target.value)} id="phone" className="border border-green text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required/>
                </div>
                <button type="submit" className="border border-green hover:bg-green font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
)}

export default CheckoutForm;