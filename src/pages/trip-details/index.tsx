import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destinatio-and-date-header";
import { Button } from "../../components/button";
import { RegisterLinkModal } from "./register-link-modal";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const [isRegisterLinkModalOpen, setIsRegisterLinkModalOpen] = useState(false)

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  function openRegisterLinkModal() {
    setIsRegisterLinkModalOpen(true)
  }

  function closeRegisterLinkModal() {
    setIsRegisterLinkModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl">Atividades</h2>
            <Button onClick={openCreateActivityModal} variant="primary" size="default">
              <Plus className="size-5 text-lime-950" /> Cadastrar atividade
            </Button>
          </div>

          <Activities />
        </div>
        
        <div className="w-80">
          <div className="space-y-6">
            <ImportantLinks 
              openRegisterLinkModal={openRegisterLinkModal}
            />
            <div className="w-full bg-zinc-800 h-px"></div>
            <Guests />
          </div>
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal 
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {isRegisterLinkModalOpen && (
        <RegisterLinkModal 
          closeRegisterLinkModal={closeRegisterLinkModal}
        />
      )}

    </div>
  );
}
