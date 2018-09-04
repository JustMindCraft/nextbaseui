import AV from 'leancloud-storage';
import { Realtime, TextMessage } from 'leancloud-realtime';
const { Query, User } = AV;
AV.init('o7gkcpWvDsEywOvDS6G0QwTf-gzGzoHsz', 'hAsx98AMiq2d6B3yRbeeFhky');

export { Query, User, Realtime, TextMessage }