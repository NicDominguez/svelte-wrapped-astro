import { Components } from '@astrouxds/astro-web-components';
interface RuxIconWhereToVoteProps {
    /** The fill color for the icon */
    color?: Components.RuxIconWhereToVote["color"];
    /** The size of the icon. Can be 'extra-small', 'small', 'normal', 'large', 'auto' or any custom value ('30px', '1rem', '3.321em') */
    size?: Components.RuxIconWhereToVote["size"];
}
interface RuxIconWhereToVoteEvents {
}
interface RuxIconWhereToVoteSlots {
    default: any;
}
import { SvelteComponent } from "svelte/internal";
declare class RuxIconWhereToVote extends SvelteComponent {
    $$prop_def: RuxIconWhereToVoteProps;
    $$events_def: RuxIconWhereToVoteEvents;
    $$slot_def: RuxIconWhereToVoteSlots;
    $on<K extends keyof RuxIconWhereToVoteEvents>(type: K, callback: (e: RuxIconWhereToVoteEvents[K]) => any): () => void;
    $set($$props: Partial<RuxIconWhereToVoteProps>): void;
    constructor(options: any);
    get color(): any;
    set color(color: any);
    get size(): any;
    set size(size: any);
    get getWebComponent(): HTMLRuxIconWhereToVoteElement | undefined;
}
export default RuxIconWhereToVote;
