import { Components } from '@astrouxds/astro-web-components';
interface RuxIconViewAgendaProps {
    /** The fill color for the icon */
    color?: Components.RuxIconViewAgenda["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconViewAgenda["size"];
}
interface RuxIconViewAgendaEvents {
}
interface RuxIconViewAgendaSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconViewAgenda extends SvelteComponent {
    $$prop_def: RuxIconViewAgendaProps;
    $$events_def: RuxIconViewAgendaEvents;
    $$slot_def: RuxIconViewAgendaSlots;
    $on<K extends keyof RuxIconViewAgendaEvents>(type: K, callback: (e: RuxIconViewAgendaEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconViewAgendaProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconViewAgendaElement | undefined;
}
export default RuxIconViewAgenda;
