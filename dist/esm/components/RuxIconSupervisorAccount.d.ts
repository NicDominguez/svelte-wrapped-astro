import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSupervisorAccountProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSupervisorAccount["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSupervisorAccount["size"];
}
interface RuxIconSupervisorAccountEvents {
}
interface RuxIconSupervisorAccountSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSupervisorAccount extends SvelteComponent {
    $$prop_def: RuxIconSupervisorAccountProps;
    $$events_def: RuxIconSupervisorAccountEvents;
    $$slot_def: RuxIconSupervisorAccountSlots;
    $on<K extends keyof RuxIconSupervisorAccountEvents>(type: K, callback: (e: RuxIconSupervisorAccountEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSupervisorAccountProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSupervisorAccountElement | undefined;
}
export default RuxIconSupervisorAccount;
