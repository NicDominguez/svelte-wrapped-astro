import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSurroundSoundProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSurroundSound["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSurroundSound["size"];
}
interface RuxIconSurroundSoundEvents {
}
interface RuxIconSurroundSoundSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSurroundSound extends SvelteComponent {
    $$prop_def: RuxIconSurroundSoundProps;
    $$events_def: RuxIconSurroundSoundEvents;
    $$slot_def: RuxIconSurroundSoundSlots;
    $on<K extends keyof RuxIconSurroundSoundEvents>(type: K, callback: (e: RuxIconSurroundSoundEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSurroundSoundProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSurroundSoundElement | undefined;
}
export default RuxIconSurroundSound;
