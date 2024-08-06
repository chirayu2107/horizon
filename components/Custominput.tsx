import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { z } from 'zod'
import { Control, Controller, FieldPath, Form} from 'react-hook-form'
import { authFormSchema } from '@/lib/utils'

interface CustomInputProps {
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string,


}
const CustomInput = ({control, name, label, placeholder}: 
    CustomInputProps) => {
  return (
    <Controller
          name = {name}
          control={control}
          render={({ field }) => (
            <div className='form-item'>
                <FormLabel className="form-label">
                    {label}
                </FormLabel>
                <div className='flex w-full'>
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            className='input-class'
                            type={name === "password" ? "password" : "text"}
                            {...field}
                        />
                    </FormControl>
                    <FormMessage 
                        className='form-message mt-2'
                    />
                </div>
            </div>
          )}
        />
  )
}

export default CustomInput;