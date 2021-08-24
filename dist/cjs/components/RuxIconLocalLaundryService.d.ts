import { Components } from '@astrouxds/astro-web-components';
interface RuxIconLocalLaundryServiceProps {
    /** The fill color for the icon */
    color?: Components.RuxIconLocalLaundryService["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconLocalLaundryService["size"];
}
interface RuxIconLocalLaundryServiceEvents {
}
interface RuxIconLocalLaundryServiceSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconLocalLaundryService extends SvelteComponent {
    $$prop_def: RuxIconLocalLaundryServiceProps;
    $$events_def: RuxIconLocalLaundryServiceEvents;
    $$slot_def: RuxIconLocalLaundryServiceSlots;
    $on<K extends keyof RuxIconLocalLaundryServiceEvents>(type: K, callback: (e: RuxIconLocalLaundryServiceEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconLocalLaundryServiceProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconLocalLaundryServiceElement | undefined;
}
export default RuxIconLocalLaundryService;
