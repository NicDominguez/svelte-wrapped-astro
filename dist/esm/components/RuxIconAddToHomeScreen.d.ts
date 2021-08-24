import { Components } from '@astrouxds/astro-web-components';
interface RuxIconAddToHomeScreenProps {
    /** The fill color for the icon */
    color?: Components.RuxIconAddToHomeScreen["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconAddToHomeScreen["size"];
}
interface RuxIconAddToHomeScreenEvents {
}
interface RuxIconAddToHomeScreenSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconAddToHomeScreen extends SvelteComponent {
    $$prop_def: RuxIconAddToHomeScreenProps;
    $$events_def: RuxIconAddToHomeScreenEvents;
    $$slot_def: RuxIconAddToHomeScreenSlots;
    $on<K extends keyof RuxIconAddToHomeScreenEvents>(type: K, callback: (e: RuxIconAddToHomeScreenEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconAddToHomeScreenProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconAddToHomeScreenElement | undefined;
}
export default RuxIconAddToHomeScreen;
