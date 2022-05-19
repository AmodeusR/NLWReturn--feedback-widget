import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

interface Props {
  className?: string
}

const CloseButton = ({ className }: Props) => {

  return (
    <Popover.Button className={`hover:text-zinc-100 text-zinc-400 transition-colors absolute right-5 top-5.5 ${!!className && className}`} title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
    );
}

export default CloseButton