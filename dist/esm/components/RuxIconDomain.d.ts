import { Components } from '@astrouxds/astro-web-components';
interface RuxIconDomainProps {
    /** The fill color for the icon */
    color?: Components.RuxIconDomain["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconDomain["size"];
}
interface RuxIconDomainEvents {
}
interface RuxIconDomainSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconDomain extends SvelteComponent {
    $$prop_def: RuxIconDomainProps;
    $$events_def: RuxIconDomainEvents;
    $$slot_def: RuxIconDomainSlots;
    $on<K extends keyof RuxIconDomainEvents>(type: K, callback: (e: RuxIconDomainEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconDomainProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconDomainElement | undefined;
}
export default RuxIconDomain;
