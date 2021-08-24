import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLineWeightProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLineWeight["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLineWeight["size"];
}
interface RuxIconLineWeightEvents {
}
interface RuxIconLineWeightSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLineWeight extends SvelteComponent {
    $$prop_def: RuxIconLineWeightProps;
    $$events_def: RuxIconLineWeightEvents;
    $$slot_def: RuxIconLineWeightSlots;
    $on<K extends keyof RuxIconLineWeightEvents>(type: K, callback: (e: RuxIconLineWeightEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLineWeightProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLineWeightElement | undefined;
}
export default RuxIconLineWeight;
