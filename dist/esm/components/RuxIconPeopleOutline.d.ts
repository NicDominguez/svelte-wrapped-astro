import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPeopleOutlineProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPeopleOutline["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPeopleOutline["size"];
}
interface RuxIconPeopleOutlineEvents {
}
interface RuxIconPeopleOutlineSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPeopleOutline extends SvelteComponent {
    $$prop_def: RuxIconPeopleOutlineProps;
    $$events_def: RuxIconPeopleOutlineEvents;
    $$slot_def: RuxIconPeopleOutlineSlots;
    $on<K extends keyof RuxIconPeopleOutlineEvents>(type: K, callback: (e: RuxIconPeopleOutlineEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPeopleOutlineProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPeopleOutlineElement | undefined;
}
export default RuxIconPeopleOutline;
