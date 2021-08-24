import { Components } from '@astrouxds/astro-web-components';
interface RuxIconNaturePeopleProps {
    /** The fill color for the icon */
    color?: Components.RuxIconNaturePeople["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconNaturePeople["size"];
}
interface RuxIconNaturePeopleEvents {
}
interface RuxIconNaturePeopleSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconNaturePeople extends SvelteComponent {
    $$prop_def: RuxIconNaturePeopleProps;
    $$events_def: RuxIconNaturePeopleEvents;
    $$slot_def: RuxIconNaturePeopleSlots;
    $on<K extends keyof RuxIconNaturePeopleEvents>(type: K, callback: (e: RuxIconNaturePeopleEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconNaturePeopleProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconNaturePeopleElement | undefined;
}
export default RuxIconNaturePeople;
