import { Components } from '@astrouxds/astro-web-components';
interface RuxIconPersonAddDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconPersonAddDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconPersonAddDisabled["size"];
}
interface RuxIconPersonAddDisabledEvents {
}
interface RuxIconPersonAddDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconPersonAddDisabled extends SvelteComponent {
    $$prop_def: RuxIconPersonAddDisabledProps;
    $$events_def: RuxIconPersonAddDisabledEvents;
    $$slot_def: RuxIconPersonAddDisabledSlots;
    $on<K extends keyof RuxIconPersonAddDisabledEvents>(type: K, callback: (e: RuxIconPersonAddDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconPersonAddDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconPersonAddDisabledElement | undefined;
}
export default RuxIconPersonAddDisabled;
