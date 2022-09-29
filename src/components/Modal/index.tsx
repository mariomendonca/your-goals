import BottomSheet, { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetProps } from '@gorhom/bottom-sheet'
import { ReactNode, RefObject } from 'react'

interface ModalProps extends BottomSheetProps {
  children: ReactNode
  reference: RefObject<BottomSheet>
}

export function Modal({ reference, children, ...rest }: ModalProps) {
  const renderBackdrop = (props: BottomSheetBackdropProps) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
    />
  )
  return (
    <BottomSheet
      backdropComponent={renderBackdrop}
      ref={reference}
      {...rest}
    >
      {children}
    </BottomSheet>
  )
}
