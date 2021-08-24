import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDomainDisabledProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDomainDisabled["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDomainDisabled["size"];
}
interface RuxIconDomainDisabledEvents {
}
interface RuxIconDomainDisabledSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDomainDisabled extends SvelteComponent {
    $$prop_def: RuxIconDomainDisabledProps;
    $$events_def: RuxIconDomainDisabledEvents;
    $$slot_def: RuxIconDomainDisabledSlots;
    $on<K extends keyof RuxIconDomainDisabledEvents>(type: K, callback: (e: RuxIconDomainDisabledEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDomainDisabledProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDomainDisabledElement | undefined;
}
export default RuxIconDomainDisabled;
