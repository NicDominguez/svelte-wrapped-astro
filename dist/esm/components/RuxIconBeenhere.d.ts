import { Components } from '@astrouxds/astro-web-components';
interface RuxIconBeenhereProps {
    /** The fill color for the icon */
    color?: Components.RuxIconBeenhere["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconBeenhere["size"];
}
interface RuxIconBeenhereEvents {
}
interface RuxIconBeenhereSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconBeenhere extends SvelteComponent {
    $$prop_def: RuxIconBeenhereProps;
    $$events_def: RuxIconBeenhereEvents;
    $$slot_def: RuxIconBeenhereSlots;
    $on<K extends keyof RuxIconBeenhereEvents>(type: K, callback: (e: RuxIconBeenhereEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconBeenhereProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconBeenhereElement | undefined;
}
export default RuxIconBeenhere;
