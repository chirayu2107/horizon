import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Controller, Control } from 'react-hook-form'
import { z } from 'zod'
import { authFormSchema } from '@/lib/utils'

interface CustomInputProps {
  control: Control<z.infer<typeof authFormSchema>>,
  name: 'email' | 'password', 
  label: string,
  placeholder: string,
}

const CustomInput = ({ control, name, label, placeholder }: CustomInputProps) => {
  return (
    <Controller
      name={name}
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
                {...field}
              />
            </FormControl>
            <FormMessage className='form-message mt-2' />
          </div>
        </div>
      )}
    />
  )
}

export default CustomInput;
