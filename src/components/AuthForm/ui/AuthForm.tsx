import { classNames } from '../../../shared/classNames/classNames'
import cls from './AuthForm.module.scss'

interface AuthFormProps {
className?: string
}

export const AuthForm = ({className}: AuthFormProps) => {


    
return (
<div className={classNames(cls.AuthForm, {}, [className])}>

</div>
)
}