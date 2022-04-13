export interface UserProps {
    code: number
    name: string
    cpf: string
    cbo: number
    job: string
    boss: string
    initial_work_date: string
}

export interface PaymentsProps {
    payments: any
    user: UserProps
}