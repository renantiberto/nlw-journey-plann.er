import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../components/button";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { toast } from "sonner";

interface RegisterLinkModalProps {
    closeRegisterLinkModal: () => void
}

export function RegisterLinkModal({
    closeRegisterLinkModal
}:RegisterLinkModalProps) {
  const { tripId } = useParams()

  async function registerLink(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const title = data.get('title')?.toString()
    const url = data.get('url')?.toString()

    if (!title) return toast.error('Informe o título do link.')
    if (!url) return toast.error('Informe a URL.')

    try {
      await api.post(`/trips/${tripId}/links`, { title, url })
      toast.success('Link cadastrado!')
      window.document.location.reload()
    } catch (error: any) {
      toast.error(error?.response?.data?.message ?? 'Erro ao cadastrar link.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button onClick={closeRegisterLinkModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>

        <form onSubmit={registerLink} className="w-full flex items-center flex-col justify-between gap-2">
          <div className="w-full flex items-center gap-2 h-16 px-4 bg-zinc-950 rounded-xl border border-zinc-800">
            <Tag className="size-5 text-zinc-400" />
            <input
              type="text"
              name="title"
              placeholder="Título do link"
              className=" bg-transparent text-lg placeholder-zinc-400 w-full outline-none "
            />
          </div>
          <div className="w-full flex items-center gap-2 h-16 px-4 bg-zinc-950 rounded-xl border border-zinc-800">
            <Link2 className="size-5 text-zinc-400" />
            <input
              type="url"
              name="url"
              placeholder="URL"
              className="w-full bg-transparent text-lg placeholder-zinc-400 outline-none "
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
