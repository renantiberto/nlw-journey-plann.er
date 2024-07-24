import { ComponentProps, ReactNode } from "react"

import { tv, VariantProps } from 'tailwind-variants';

const buttonVariantes = tv({
    base: 'px-5 rounded-md flex items-center justify-center gap-2 font-medium',

    variants: {
        variant: {
            primary: 'h-11 bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'h-11 bg-zinc-800 text-zinc-200 hover:bg-zinc-600'
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },

    defaultVariants: {
        variant: 'primary',
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariantes> {
    children: ReactNode
}

export function Button({ children, variant, size, ...props }: ButtonProps) {
    return (
        <button {...props} className={buttonVariantes({ variant, size })}>
          {children}
        </button>
    )
}