import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPetsProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPets["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPets["size"];
}
interface RuxIconPetsEvents {
}
interface RuxIconPetsSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPets extends SvelteComponent {
    $$prop_def: RuxIconPetsProps;
    $$events_def: RuxIconPetsEvents;
    $$slot_def: RuxIconPetsSlots;
    $on<K extends keyof RuxIconPetsEvents>(type: K, callback: (e: RuxIconPetsEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPetsProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPetsElement | undefined;
}
export default RuxIconPets;
