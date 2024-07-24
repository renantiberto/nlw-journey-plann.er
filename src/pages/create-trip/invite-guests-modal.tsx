import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteguestsModalProps {
    closeGuestsModal: () => void
    emailsToInvite: string[]
    removeEmailFromInvites: (email: string) => void
    addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
}

export function InviteGuestsModal( {
    closeGuestsModal,
    emailsToInvite,
    removeEmailFromInvites,
    addNewEmailToInvite
}: InviteguestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
      <div className="w-[640px] rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full bg-zinc-800 h-px"></div>

        <form
          onSubmit={addNewEmailToInvite}
          className="h-16 px-4 bg-zinc-950 rounded-xl flex items-center justify-between border border-zinc-800"
        >
          <div className="flex items-center gap-2">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 w-full outline-none"
            />
          </div>

          <Button type="submit" variant="primary" size="default">
            Convidar <Plus />
          </Button>
        </form>
      </div>
    </div>
  );
}
