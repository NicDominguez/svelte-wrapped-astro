import { Components } from '@astrouxds/astro-web-components';
interface RuxStatusProps {
    /** Sets the status symbol, valid options are critical, serious, caution, normal, standby and off */
    status?: Components.RuxStatus["status"];
}
interface RuxStatusEvents {
}
interface RuxStatusSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxStatus extends SvelteComponent {
    $$prop_def: RuxStatusProps;
    $$events_def: RuxStatusEvents;
    $$slot_def: RuxStatusSlots;
    $on<K extends keyof RuxStatusEvents>(type: K, callback: (e: RuxStatusEvents[K]) => any): () => void;
    $set($$props: Partial<RuxStatusProps>): void;
    constructor(options: any);
    get status(): any;
    set status(status: any);
    get getWebComponent(): HTMLRuxStatusElement | undefined;
}
export default RuxStatus;
