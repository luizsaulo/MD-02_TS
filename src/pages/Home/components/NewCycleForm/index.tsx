import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(5).max(60),
})

interface NewCycleFormData {
  task: string
  minutesAmount: number
}

// Uma outra forma de escrever a interface acima é da maneira abaixo:
// type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,     
    }
  })

    return (
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput 
            id="task" 
            list='task-suggestions'
            placeholder="Dê um nome para seu projeto"
            disabled={!!activeCycle}
            {...register('task')}      
          />

          <datalist id='task-suggestions'>
            <option value='Projeto 1'></option>
            <option value='Projeto X'></option>
            <option value='Projeto SpaceX'></option>
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmountInput 
            type='number' 
            id='minutesAmount' 
            placeholder="00"
            step={5}
            min={5}
            max={60}
            disabled={!!activeCycle}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>  
    )
}