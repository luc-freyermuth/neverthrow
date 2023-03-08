import { Result } from './result'

export type PipeableOperator<T1, E1, T2, E2> = (source: Result<T1, E1>) => Result<T2, E2>
