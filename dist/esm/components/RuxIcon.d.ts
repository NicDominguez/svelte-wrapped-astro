import { Components } from '@astrouxds/astro-web-components';
interface RuxIconProps {
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIcon["size"];
    /** The icon name */
    icon?: Components.RuxIcon["icon"];
    /** The icon color */
    color?: Components.RuxIcon["color"];
    /** The icon SVG's title attribute. Used for accessibility. If none is provided, the icon name will be used. */
    label?: Components.RuxIcon["label"];
}
interface RuxIconEvents {
}
interface RuxIconSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIcon extends SvelteComponent {
    $$prop_def: RuxIconProps;
    $$events_def: RuxIconEvents;
    $$slot_def: RuxIconSlots;
    $on<K extends keyof RuxIconEvents>(type: K, callback: (e: RuxIconEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconProps>): void;
    constructor(options: any);
    get size(): any;
    set size(size: any);
    get icon(): any;
    set icon(icon: any);
    get color(): any;
    set color(color: any);
    get label(): any;
    set label(label: any);
    get getWebComponent(): HTMLRuxIconElement | undefined;
}
export default RuxIcon;
