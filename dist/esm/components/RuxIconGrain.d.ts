import { Components } from '@astrouxds/astro-web-components';
interface RuxIconGrainProps {
    /** The fill color for the icon */
    color?: Components.RuxIconGrain["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconGrain["size"];
}
interface RuxIconGrainEvents {
}
interface RuxIconGrainSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconGrain extends SvelteComponent {
    $$prop_def: RuxIconGrainProps;
    $$events_def: RuxIconGrainEvents;
    $$slot_def: RuxIconGrainSlots;
    $on<K extends keyof RuxIconGrainEvents>(type: K, callback: (e: RuxIconGrainEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconGrainProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconGrainElement | undefined;
}
export default RuxIconGrain;
