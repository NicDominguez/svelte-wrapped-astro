import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPerson["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPerson["size"];
}
interface RuxIconPersonEvents {
}
interface RuxIconPersonSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPerson extends SvelteComponent {
    $$prop_def: RuxIconPersonProps;
    $$events_def: RuxIconPersonEvents;
    $$slot_def: RuxIconPersonSlots;
    $on<K extends keyof RuxIconPersonEvents>(type: K, callback: (e: RuxIconPersonEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonElement | undefined;
}
export default RuxIconPerson;
