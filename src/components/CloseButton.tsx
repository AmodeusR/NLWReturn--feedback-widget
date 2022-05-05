import { Popover } from "@headlessui/react"
import { X } from "phosphor-react"

const CloseButton = () => {
  return (
    <Popover.Button className="hover:text-[crimson] transition-colors" title="Fechar formulário de feedback">
      <X weight="bold" className="w-4 h-4" />
    </Popover.Button>
    )
}

export default CloseButton