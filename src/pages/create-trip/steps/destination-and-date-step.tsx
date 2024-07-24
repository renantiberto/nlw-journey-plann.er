import { ArrowRight, Calendar, MapPin, Settings2, X } from "lucide-react";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from 'date-fns';
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps {
    isGuestsInputsOpen: boolean
    openGuestsInput: () => void
    closeGuestsInput: () => void
    setDestination: (destination: string) => void
    eventStartAndEndDates: DateRange | undefined
    setEventStartAndEndDates: (dates: DateRange | undefined) => void
}

export function DestinationAndDateStep( {
    isGuestsInputsOpen,
    openGuestsInput,
    closeGuestsInput,
    setDestination,
    eventStartAndEndDates,
    setEventStartAndEndDates
}: DestinationAndDateStepProps ) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePicker() {
    return setIsDatePickerOpen(true)
  }

  function closeDatePicker() {
    return setIsDatePickerOpen(false)
  }

  const displayedDate = eventStartAndEndDates && eventStartAndEndDates.from && eventStartAndEndDates.to 
    ? format(eventStartAndEndDates.from, "d' de 'LLL").concat(' até ').concat(format(eventStartAndEndDates.to,  "d' de 'LLL"))
    : null
  
  return (
    <div className="h-16 px-4 bg-zinc-900 rounded-xl flex items-center shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          disabled={isGuestsInputsOpen}
          type="text"
          name=""
          id=""
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none"
          onChange={event => setDestination(event.target.value)}
        />
      </div>

      <button onClick={openDatePicker} disabled={isGuestsInputsOpen} className="flex items-center gap-2 text-left">
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 flex-1">
          { displayedDate || 'Quando?' }
        </span>
      </button>

      {isDatePickerOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
          <div className="rounded-xl px-5 py-6 shadow-shape bg-zinc-900 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Selecione a data</h2>
                <button type="button" onClick={closeDatePicker}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
            </div>
    
            <DayPicker mode="range" selected={eventStartAndEndDates} onSelect={setEventStartAndEndDates} />
          </div>
        </div>
      )}

      <div className="w-px h-6 bg-zinc-800 mr-6" />

      {isGuestsInputsOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary" size="default">
          Alterar local/data <Settings2 />
        </Button>
      ) : (
        <Button onClick={openGuestsInput} variant="primary" size="default">
          Continuar <ArrowRight />
        </Button>
      )}
    </div>
  );
}
