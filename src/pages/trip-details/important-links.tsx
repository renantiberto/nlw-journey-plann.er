import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {
  openRegisterLinkModal: () => void
}

export function ImportantLinks({ openRegisterLinkModal }:ImportantLinksProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              className="w-60 block text-zinc-400 text-sm truncate hover:text-zinc-200"
              href="#"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-200 shrink-0" />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              className="w-60 block text-zinc-400 text-sm truncate hover:text-zinc-200"
              href="#"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-200 shrink-0" />
        </div>
      </div>
      <Button onClick={openRegisterLinkModal} variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
