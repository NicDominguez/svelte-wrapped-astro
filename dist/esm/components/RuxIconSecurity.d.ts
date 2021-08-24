import { Components } from '@astrouxds/astro-web-components';
interface RuxIconSecurityProps {
    /** The fill color for the icon */
    color?: Components.RuxIconSecurity["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconSecurity["size"];
}
interface RuxIconSecurityEvents {
}
interface RuxIconSecuritySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconSecurity extends SvelteComponent {
    $$prop_def: RuxIconSecurityProps;
    $$events_def: RuxIconSecurityEvents;
    $$slot_def: RuxIconSecuritySlots;
    $on<K extends keyof RuxIconSecurityEvents>(type: K, callback: (e: RuxIconSecurityEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconSecurityProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconSecurityElement | undefined;
}
export default RuxIconSecurity;
