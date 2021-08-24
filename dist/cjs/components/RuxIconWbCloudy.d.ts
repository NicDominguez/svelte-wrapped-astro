import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWbCloudyProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWbCloudy["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWbCloudy["size"];
}
interface RuxIconWbCloudyEvents {
}
interface RuxIconWbCloudySlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWbCloudy extends SvelteComponent {
    $$prop_def: RuxIconWbCloudyProps;
    $$events_def: RuxIconWbCloudyEvents;
    $$slot_def: RuxIconWbCloudySlots;
    $on<K extends keyof RuxIconWbCloudyEvents>(type: K, callback: (e: RuxIconWbCloudyEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWbCloudyProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWbCloudyElement | undefined;
}
export default RuxIconWbCloudy;
