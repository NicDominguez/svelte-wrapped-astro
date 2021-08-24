import { Components } from '@astrouxds/astro-web-components';
interface RuxIconClassProps {
    /** The fill color for the icon */
    color?: Components.RuxIconClass["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconClass["size"];
}
interface RuxIconClassEvents {
}
interface RuxIconClassSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconClass extends SvelteComponent {
    $$prop_def: RuxIconClassProps;
    $$events_def: RuxIconClassEvents;
    $$slot_def: RuxIconClassSlots;
    $on<K extends keyof RuxIconClassEvents>(type: K, callback: (e: RuxIconClassEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconClassProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconClassElement | undefined;
}
export default RuxIconClass;
