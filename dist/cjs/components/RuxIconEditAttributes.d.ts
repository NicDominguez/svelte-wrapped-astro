import { Components } from '@astrouxds/astro-web-components';
interface RuxIconEditAttributesProps {
    /** The fill color for the icon */
    color?: Components.RuxIconEditAttributes["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconEditAttributes["size"];
}
interface RuxIconEditAttributesEvents {
}
interface RuxIconEditAttributesSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconEditAttributes extends SvelteComponent {
    $$prop_def: RuxIconEditAttributesProps;
    $$events_def: RuxIconEditAttributesEvents;
    $$slot_def: RuxIconEditAttributesSlots;
    $on<K extends keyof RuxIconEditAttributesEvents>(type: K, callback: (e: RuxIconEditAttributesEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconEditAttributesProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconEditAttributesElement | undefined;
}
export default RuxIconEditAttributes;
