import React from "react";
import {request} from "../util/Ajax";
import {Button, Card, Col, Container, Form, ListGroup, Row, Badge, Image} from "react-bootstrap";
import HeaderInfo from "../components/headerInfo";
import SideBar from "../components/sideBar";
const autobind = require('class-autobind').default;

export const DEFAULT_PHOTO = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAETCAYAAAAVqeK4AAAABmJLR0QA/wD/AP+gvaeTAAA1q0lEQVR42u29d5gc1Zmo/54KHSYnjdIoSyhLJAkRFExOZo3t9RKcMXjttddrwvp6ffd61xtsrwH7+e1d+xpn72L7XmPACTAsBhFEEGBASEISIKGApJEmT0+nqjq/P3pm1DPTM5rp6dzf+zxY7e6a7q6qc94+4TvfUVprTZbp6OjI9kdQX1+PnIech5xH/s7DQBAEIQOITARByAgiE0EQMoLIRBCEjCAyEQQhI4hMBEHICCITQRAygshEEISMIDIRBCEjiEwEQcgIIhNBEDKCyEQQhIxgySUoDzSghj+nIa4hHPcIOxBxIOp6OC44GlwN2tOJP9SgDIWpwFJgmeA3DQIWBC0I2ga2AqVO/rmCyEQoAmEkE4pDe9jjeMjhWERxpNfhUGeEfR1xDocNWrvjdIXCxLRCKxONAu2hPQ+tNakWlCulEv8ZBigDhUZpF5/S1FYFmVptMy3oMre+g5l1QaZVmUwJeDRV2jQEDSrtYe8nt01kIuRZHLpfH0oRduBYyGFvl2Z3W4ztrXG2H4txuCtC1DWIx2No7YEGPWpbwR3n5+rEZ3tDj48DoY4Q73ScUJtCgQKlDGzbxm9qptcGWD7FZnmzj1MafcyrUTRVWlTYAyelRrRuBJGJkGmBAI6n6YxodrS5bD0U4YXDDruP9tId9YjFncEKPzq5qqmKAd9p7RGNRokC3X0xdh2G+/qN4bMsagIGp0ytYs0MmzNn+FnWaFEXAMtQ0nIRmQiZkoenoSvq8cwhh8f2RXnpYC+Hux1CsTja8yjWUYkB4UXjcY7F4VhPhKffSHSfKn0202ssTm+p4vy5AdbNNKn1GxhKukUiE2FCAnE1bGt1+fWuEC8c7OONthh9MRe0y8hGR6lUr8R5aM+jNxJlTyTKG8dC/L+XTSpsk4VNPs6cWcGfLalgZbOFKVYpvDsoaRvzex5aJ8Y94i488Y7micMmLx7s5WBnbBR5lHFhVQqUQUudjzNbqlg/3WXDDIVtZk+pkrZx/EjLJE9owPXg8UPw6Ntxnj0YpSPsol0H8cco10xr0C4H2sMcbA/z6+0W9UGTdS1+LphjsWmmwjSkK5QvRCY5FojW8Gob/GGvwyNvhjkWchLTsXJ5Jn4tXYe2XocHXo/ywC6D5iqbC+cHuGSexarGRMyLiCV3SDcnB+ehgc4oPPy2x292R9hx3MFz4iKQbBRowLBslk2xuGpRgIvnGNT505eKdHPGj7RMssRAHMiODsXv33K5b3eEUF9ELky2rzvgOnG2HY6z7XCYbwUDXL04wBXzTZbVSxxLNhGZZLowa4h7mq2tiru3x3j6QARkHCRvhMIR7n45wt2vWpwzO8AHl/tZ06yxDZFKplHt7e1ZL+fl0lTsc+Dx/XHueLKNN9rCeK6LUFgYpsmCxgC3rm9i02ybCqvwy1Wx1A9pmUwSDYQdzR/ejHLns93sP96L53lyYQoUz3XZ0xriU/eFmdVUxS3rarhkgZ+gJdG2k0VkMgmirubBt+LcuaWTfcd60BIUUjR4nsfbrd187rc9zJ1Szc3n1HHZfBu/RMOljcgkDRxP88d9Me54ppudR3r6w9qFYkRrzd7Wbv76N70smVbNLWfXcMFcH5YhUpkoIpOJFDzg1aMO//xkF8+/3SXdmVK6t57Hzne6uOm+HtbOreV/rq9hVbMtF2YCyADseAoa0BFR/Ps2+N3OLqKxGBIOVcpo/D4fVy6p5bOrNPWB7N5tGYAtE1wP/muX5kcvddMeHpCIiKS0UURjcX716nEee8vPx1ZXcv1ihSVJTsdEZDIKWsPLxzW3Px9l+5EwnvYQiZQf7b1RvrklzsNvBbh1bYBTmyQ+ZTREJinoicNd21x+9lof8VgUkUh542mPbYdDfOJBh+uWV3DTSpNqn1yX4YhMktAanj+q+ddnwuxrC/dHrYpIhEQ5iMdi/PRPMZ7YH+Tvzg6wdqohrZQkpBfYT28cvvWyy00P9rB3UCSCMBQN7G0Lc9ODvXzrTy69cbkmA5S9TDSws13zkQfD/PilTrQrpUMYR7lx4/z4T5189MEIO9u1/PhQ5jJxPPjFLo8P/7abPa19ktVMmBBaw+7WEB/+bTe/2OXhlHnYUdnKpCuquXlznK8/3UW0P6u7IKRDNO7w9ae7uGVznK5o+V6HspOJBra3a677fZjH3+yWKFYhI3iex2NvdnPd7/rY3lae3Z6ykomnNb/a4/KJ3/dwoD0sNUDIOAc6wtz4YC/37im/VJxlMzUc8+D2F1zu2dGL40ieESF79EZi/MvTHrs6Krn1TAtfmfxkl/xpag0dEfjcY3F+8WqXiETICY7j8ItXu/jcY3E6opTF4H5Jy0Rr2NsDNz0cZsu+binhQs7Zsq+bm/4QZm+3LnmhlLRMXmlTfOKBHna1hmTaV8gLWsOu1hA3PhTilbbSPteSlInW8NgBj0891M3xXkkXIOQbxbGeKJ9+qIfHDpTuLo0lJxOt4TdvedzyaDehSEzKsVAw9EZi3PJoL795qzSFUlIy0cDduzy+/IQMtAqFieM4fPmJbu7eVXpTxyUzNex6mh/u0Hx7azeeK4FoQuHiuR53bOkm7NTy8WWlc14l0TJxNXx/h8F3XujBlb1qhGIos57Ld17o5vs7DNwSaaIU/V7Drqf53g7Fd7d2ikiEosM0TW5aU8dNyzRmFjPi5yLPbFG3TDyt+eFOxV0viEiE4sR1Xe7a2sEPdyTKczFTtDLRGn62C779fKcMtgpFjet6fHtrFz/bVdyBbUUpE63h12+63L5FWiRCaeC6Lrc/08Wv33SKVihFJxOtNZsPunzlKdnTVygtPNfjK0+F2HzQLcqtZotKJlrDK23wxc19OI4kNBJKD8dx+OLmEK+2qaJroRSNTLSGfT1wy6MhiWwVSppQJM4tfwyxr6e4VhsXjUw6o5ovbA5zrCcipU0oeVq7w3xhc4TOaPHYpChkEvPgS1tcdrX2IYv2hPJAsau1jy9tcYkVyRxDwcvE03D7Cw5PvdUlaQSEskJrzVNvdXH7iw5eEZT9gpaJBu59w+OeHb1SsoSy5Z4dvdz7RuEvDCxomew47nHHsz0SlCaUNY7jcsezPew4Xtj1oGBl0hXVfOGJCKGoTAELQijq8IUnonQV8IBsQcrE8TRf3hJnv2xHIQiD7G8P8+Ut8YLdObDgZKKBX+7xeHxvSEqPIAzj8b0hfrnHLcjxk4KSidaa19s133xOQuUFIRWe5/HN50LsbCu8+lFQMgk58PdPRYjEZJxEEEYjEovz5aej9MYLq31SMDLRwPdeddhzrE9KiyCchN3H+vjeNqegujsFIROt4fnDLj/ZFpHANEEYZ535yasRnj9cOJnuC0ImvTHNV5+L4TmygE8QxovnxPjqs1F6Y4Vhk7zLRAPf3eawt026N4IwUfa2h7nrtcKY3cm7TF5p9fj59rB0bwQhDbSGn73Wxyut+Z/dyatMHA9u3xohHpfujSCkSzwe4/atkbwHs+VNJhq4+3WP145GkLQCgjAZFK8diXD36/ldDJg3mXSENT95tQ+vGNZWC0KB4+lEfeqI5K8+WdncIGuA4RsAeRq+8nwnbaGolAJByBBtoRj//kold15Sz/D9vHJRz/PSMtnWGuO3Oztl0FUQMojWmt/v6uG11nhePj/nMol7mn95sotoPD8nLAilTCQW45+f6CSeh+GDnMvk8X1Rnnu7Bxl0FYRsoHhufw+b3879DGlOZRJ1Nd/Y0ikrggUhi3iexze2dBJ1c9s6yZlMNPDQngivH5VIV0HINjuPhHhoTzinU8U5k0k4rrnjmU60tEoEIetoz+OOLZ2E47mrbzmRiQb+8EaYfbL+RhByxr72MA+/Gc1Z6yQnMgnHNXds6SzKzZgFoVjROtEbCOcoiVLWZaKBzW/HONAhyaEFIdfsbwuz+e1YTlonWZeJ42rufKYTT1olRYFSYBoKUMQ9CDt68L+B7rdpKJTM7BcFnva485kOnBzM7FjZfHOtYWtrIsWcULjyiLmJ6cTTp/k4oyXIjCqLGTUW9UGDgG1hKnA1ROIO7WGPwz0O7/Q4vHAwzMtHYhiGgW0iEc0Fyu5jEZ4/anPO9Oz+CGRVJii4+7Uwnis78hWUQIC4B/UBuHJxFRvmVLB+bgU1QQtFQgqjFTrd/z9KJR53hx2e2BfiyX1hfrerl44o2AYFv5VlOeG5Dj/fEeOcGYHslqv29vas3fcd7Zrrft0lMikUiSiIu5p1M/1cs6qGq5fXYJtGRmKRNRB3PH61vZv/u62b5w5FsQ0lUikQDNPiZ1fVsKwxe02TrLVMNPD7t1y0iKQgcD04c7qPW85rYOP8qoy/vwJ8lsG1q+u4dnUdj7/Zwx1Pd/Di4RhmQe9oXR5o1+H3e12WNlhZ6+pkrWXSGYXLf9VDb59kUctrIQKaggb/Y30916yuz/nn//zlDr72VAftYQlWzDdVFT4eeF8Vdf7s2CQrvxkaeGifKyLJM56GTXP8PH7D7LyIBODaU+vZfMNsNswOIHmw8ktvX4yH9mUvG1vWZPLbPRG5e3nEAP5+Yz0/ef8s6oJWXr9LXdDip3/ewpc21Mta8Tzzuz2R4pLJa22w47iMleQLU8EPr57KX57VWDDjFaYBn17XyA/eMxVTjJI3th93ee14dt4740VNa3horyMbauUJS8E918zggoXVBfn9LlpUzS//YroMyuYJz4nx0D4nKzFBGb+lrtY88mYYLQ3anGOi+b8fmMaZLRUF/T3XzKrkF38+XVooeUCjeOStcFbGrzIuk8cPeBztdeSu5bqQeC7/cWkta2dXFcX3XTe7kv99RbNEzeaBo70Ojx/K/DBERmWigT8e8FBapgFziXYc/mpxH5evaC6q733F0hr+am21zPLkGOV5PPp25rcUzahMHA+eORiRqMdc4jmsiL7Gre9eXXSL7xRw24ZmVk+15T7mEA08ezCa8cV/GZXJ5kOa9pDM4uSsULgO5p7HuetTF2IX6YimZSi+c9U08jx7XXa0hVw2H8qsTKzhG2Sli6c1T27tBi0yyQXadQhve5jPX7qM2VPrivpc5tT7+cipNXxna7ekNshdAeLJIzbvW1WNkaGLnrGfMw/FiwdC0sXJRTnwHCLbH2Fmhcv//NCFJXFOX3rXFGZUyXxxzsoQ8MKBHjLZ08nY3dt+zOFAp0S9Zr0QeC7hbQ8T7z7Op688q2TkrVF8/PRaGYzNIQc7o+xoy9xkSUZkooH7Xg9Ldpys1ziP8LY/4IXamd5QxY3vXlcy0TwKuHFtA1OC0s/JYYHi/p19GftByohMPA0vHuyThNFZve+avlcfxAu1oxR8YP3KjPV1CwXDULxnWbWEO+asSGm2HgxlrDWYEZl0Rz32HJcuThbvOn2vPIAXSuxkH486fPiSNagSk4kCrl9dQ9iRH6Vc8UZbjK5IZro6GZHJM4ei9MUlUC0rDIikr2PwqXXLZrNgZmNJnu7CpgBnTvfJfc8RfTGXZ9+JZuS9Ji0TDTy2LyZTwtlAe/S9OlQkhqHYtGp+SY9PrZ9bUXJduMItYy6P74tnZNxk0jJxPXjpUJ+MvWb6Hnsufa8+NNi1GSAWjbNm2ZyS6+IMoIC1MwNEpKuTm3Km4cWDIdwMdCwmLZOOiMs7XXG5K5m8wZ5DePvDeKH2FC/CuqWzSvr817QE8WRP6pzxTnecjgyk1ZyUTDTweptHKCqrhDOFdh0i2x/F6+1Iud/EgpmN1FQESvoa1AYt5taZUhhyRCjq8HqbM+muzuRaJlqz9VAY2SUlM2jXIbLzj0NbJMOEcur86SV/tTWwcqpfCkQOr/jWQ+FJT8lPTiZK8fw7LlpSDkz+dnoOkZ2PJVok0D8mogav88Bz06bUlnwchgJa6vyyTidXZU97PH/Ey2/LpC+u2dPae6LQC2mKxCWyo79FovTg9RwuFEMpqv12yQcHaqDCVlKqcoZiz9Fe+uKTK1eTkklbn0t3TLo4kzRJQiR9nYM3NlGLRgpFKUXAtil5eWvwmUbJzlgVIt0xTVvf5MI70paJBvZ2eURjMpOTfqXRhLc/2i8SlTQ+MopQVCLOpORRYMg4XE6JxuLs69aTuuqTapnsaRORpI3WhHc+ihfuGiaR0YWiUcQdl5If8NaJjdVlYD+37D4+uR0lJiWTba1xWdyXtkj+iNfXfUIe4xAKGnqiTsk3/5WCcNyVQMicFknNa8cmF+IxKZnsPCYtk4nfNY/IzsfQ4a6R8kiWRAqhaA2dveWxoLK9z5HcJjlme2ueWiahuOZQZ5/cgQmgPZfIricSXRtUkjuGC0WRqoWigd37W8tiNmfXcdnELde809lHaBITKmnLpD2siWnJAjxuPJfo7qfw+rqGCGN0oZBSKC+9daTkf7E9T7OtVWSSa2Laoj2SB5m09TnEYtGCvCiFVzscInu29LdIToghHaGEI1G2v320pC/X9iNhIo5MC+dcJrEobX3xtMeq0pKJBlr7lES+jlckbzw72LUZMRaiJiYUX8DP8zv3l2xXR2vYeihC0BaZ5P7ae7T2qbTDmNKSiQKOhhyZuTupSNyESAYD0hgpFMYrlMRjpRRbdh4s3RQECp47FJFQ+rzYBFr70m8gpN3NOdQRlij6MW+MS+TNZ5K6Now+FjIuoaiB+80Dz+8iHC3NmbS+mMsf9oRkWjgfKDjUEUm7WlsdHR1p/eG+Tkdu+Kgi8Yi88Sy6rxuFQitOZEZTqv9xf3Ny4DG6/zVQSvcfnnRM/2sAkbjLPU+8xgcvOq2kfK6BX73WTVwrTPmhyv3117C3I0q6Tki7ZfJOn9zt0apE5M1n0ZGeE6t9h7REmGQLBUzL5J6ntpdcw1ABv369F0uKVt44HE4/j0x6A7AaWntl6i7VhYm88Sw63HOi8mdBKFrD46/u44Xdh0rq8m09EOKp/bLxfT5p7YnldjYn5mm6yiQSc/wi8YgOaZGorArFskzu+OVTJbSjH3zrmQ580r/JK52hMOluNJGWTCIOxLSk1Rsikreex4v2DhPFJIUyRhyKVoqHXnqTJ17bVxKX8Mm9vTy+T1ol+SbqGoSd9GySlkzCjkYr2WQaQGuX6N6teJHeYXLIgFBOEthmmAZ/9/2HcYs8JNbTmv/138dl0LUQyrMyCKe53i/tlomWeWHQLvF9LyVEkiLNYraFooEdB9v4+i+eKOrL+LXNx9jT4UirpBBQinCaGdfSkknU9aDco189l9jbL+NFelGo1OLIgVCUofj33z7HC3veKcrL+MLBEN97oZtyyPlUFGiI5XLMxHFBl/O+Jp5LbP8reEmzNvkUSszTfPjr93C0o7eoLuPRnjg33HcUV5okheMSz8XJqUw05ZsUSbvEDryCF+kZmrgoj0LRwJHuPv7iq7+kN1wcU/a9UZcP3XOI9ogn3ZtCKt5oHDeH3RxPU56L/LSXaJFEkmdtCkMoKMWr+47ykdvvJVTgofahmMvH7z3EzuOyeVvhFXGNq3Msk7IVSTSUQgqFI5THtu3juq/9kq5QYaaH6ArH+cgvD/LMQQl6LNCCnnb9TjMCttxsookdeLVfJKkX4BWSUJ7cvp/LvvQTDhzrKqiruP94D+/+0R6ee0fSfRZ2ac+hTMprPxNNfP8r6Ghf6oqdb6GMEin7+uEONt32Qx556c28y19rzcMv7Obiu15nb0i2/Sx00q3daeYz0ZP4yGITyat4sb4UlbxAhMIoQgE6wlGu+9ov+ex//J5o3M35QKcGInGHv/rWfXz8/lZCvgYkCU7hqyTdafq0ZGIaqvRbJ1oTP7itXyQqyRWjVPKCFIrCBe7evI3TPv0f/OShF9E6+9VZ9//34wee49Qb7+T+482ouulIzooiUImhMNOs22llhLZU/6ZQpVo2tEf80A68aHhY/pFETTyRoySp3g7JOaL7nzuRpyTxp8OPUcPynCQ93y+0TORDUcCRrj7+5nsPcdeDL3LDpafzkYtPxzSNjLYvNeC6Hj9+aCvff+B5dh5opWr1pZi100QkxSITFFaa6xpUe3v7hO/yrnaHa37Th+uU4ECa9oi/szMx2DpYAfSwxwOPdOpjtCbpoKTHGk2qY5JuwfDn+18b+lmM/t2S3uPE4UO/m+d5TK+v4up1S3jvhhWcsWjGoKQm0uLUAwJF88Kug9y7eRv3Pr2dI509GIZBcPlFmHUikmLCtHz84qoKFjdMfCFvWjLZ1+Vy9f1h3HiJZafXHvHDu/AiIcAbu9LmWSiu67F4RgO732nHMJiwUCDhgVgkxpypdZx/6nxWz5vGsrlTWTpnCnWVwZQOUCqxTH3H263s3HuEl988zKN/eoMDrR3Yft/gYO9EReJpWNJoseN4HEti6/MnE9vHfe+pZG7txEdA0pLJkZDH5feEcOIlFCugPeJHdvW3SEar6PkXCkpTF/Dx1Q9v4r3nLubm7z3CT//4Goap0hLKwHOJbqtHLBIHramuDjKzvorGqgB+n0U0FqetJ8zB9h56ehIzW/6ATWKnwaTvrQyCy87HnMAYietprllRyTcum84fdvfwd/99jLawtGbyIhPL5sE/r2JaZY5k0hXVnP/zbuJOiUQwag/nyG68aKhfDIxR0U8mlGHHZ1Ao2vNYNbuJn97ybmY11Qwe9n8eeIl/+NkTxD0vxXc7mVBSnd+J76lTnvdopalfJLXTxn3pDQVfWl/HTWc1DT53tCfODfce5k9HY7IAMMdYpslj19VQ65+4TNKazQlaCp9yS0gkexKzNgMzL4MTJalmX1IFjyXPvAw7PkOzPJ7WXHPeEh7552uHiATgLy8/nYf+8RrmNNUwJLHSuDb6SnV+J76nSjmblKokGQSXvmvcItHAjGqT+6+bMUQkAFOrbX7z4Vl8aFWlLALMMQETglZ6uYrS+ivbgLqqQCmYBOfoGyemf5Mr+aSFkrk4FIXin6/fwL9/8mIsM/UtO3XBNJ78t4/wwY3Lk6b2JiIUdRKhqNGFogyCS96V6NqMAwX8+dIK/vjxOZw2oyJ1wVSKr14yna9f2CCZc3JIbdCHL80kimlGwEJzdbFHMur+Fkk4KbYjk0IhI0LxKcUPPnMpn7r0VIyTtPkrAzbf+uQlPPiVa1ne0tTfRUl/K9JxCUUpgsvGJxJPw6IGi/uvm8GdV86g0mectJx96PQGvv+eqZKxPkc016Zfr9POvTg9WNyrhp0jb+DFIyTV7oITit80+OnfXM5VaxeMe4c7peCMhdP5769+iB9//ipmN1QlFm5lQygKgssuwKydflKJTK8yuOuqZh766GxOn1kxodbGxYuq+c/3T8MnmUKzzrRg+sMXSqe5cONrT3bw7efaijKEwDna3yIZYJRZkIHHOnkANUezPD4F//U3l3H+qtmTOtdIzOHRl/fyzfufY+vuQ9i22d9iGd8sz9BzSh6U1QSXXTjq9K8Coq7mjOk+/vrsejbNryJgTc4GT+/r5cO/OpJ2JjDhJDJQ8Omzmvgf6+vS+nsr3Q+eWRcowmUWGqf1Lbx4NEX06chI0pHRq/3VZEQE67Bo1BGRssM+5ySRsgrND/7q4kmLBCDgs7hi7SIuW7OQV946ygNb9/Cjh//E0c4QgYCF52m0Hr5zYKpoW93/PUHhEVx+EUbt1CEiMRT0xTVTgvChU2u4fHENq6YFM7Zv8Llzq7jrz6by8fuOIj7JSvVgZp0fPcHgxUEZpdMy0cDDb8W48d79xdMy0Rrn+F50LDz6dGcBtFBc1+PfPnwen7hgedYuheN6bN39Dlt27Ofp7ft5Yvt+IpEYtt/GMhSe1uANZEAb+d0rll2AVTcNx/OIxDVBC86dFeCsWUHOmR3kjJaKrAae/eKVDm5+6DimzBtnFKXge++dzcXzfWkNeqfVMlFAc4VGKaM4Mq5pjXN8HzoeZWDMQI9oUZCjFooadS2P58JNF67IqkgALNPg7KUtrFsyk5vfew5x12XbvqPs2n+ct492cKS7j86eMJ1dIXoiMeKOi2koaoM2TYtW0zB1Bo0Bxdx6H4ub/Cyb6sNnmTmbdblmdT2722L8n609mDKOkkGZGDRX9P8IpnEz0+7mNFbY+Hx+IpFwgYvEw2k7gHaiScIYspauYISyful0vvqhc3NYePpnjCyTMxbO4PSFM05Ew9J/Xjp55ibx3YefRj74+/On8vrxGE++XWJLOvKI3+enscJOu1uattcbAgp/oQeuaY3TfgAdD58QxeC/w2YoRlvqP+z4oTMvZGSWRynFtJog3/3LC/IaU6GSBNM/7zM4a56YvFFDJrfy/V3/95XTmV5pSBxKhrCVQ2Mw/aZe2n9Z6VNMrwsWgUiio4iCAhBK4njP0/x/H9/I1NoCvp4FSEOFxZ2XTy3PnMRZYGZ9kAo7/b+fVI9z2RS70K5HkkgOnujaDJeIGplcKD9CSXQnPnvZKjatbJHSnAbnza3kc+tqJctBBljW5JvU309KJiub7QLMuKZxOg4NHSMZbd3LsMjXfAhlVn0lt/3ZadJUnwR/fU4js2tMuRCTQCnFyqn2pMI9JiWTUxp9hXZNcNv7RTKiYo+2kI68CcVzNd/66HlU+KyCu47FhN8yuP2y5rR3ohMSLGqwJzUQlrZMFDCvTuH3FU5Xx+04hHbjY6x1KRyhKAXvWzuPDUtnSCnOAGfPqeT9yyrkQqSJ32czr25yg9mTapk0Bk1qfIXRQHc730E7sRSVu0CFouHvrj6dUs/LnSsU8IUNTXIh0qTGp2gMTq6rOCmZBG3FKVOryXdcvdt1OCGSFEv3JyyUZFkMF8BEhMLYQrnpgmXMba6WUpxBWmp9fOrMGrkQE0ZzyrQqgvbkftkmJRMFrJk2vPLl8hpo3K4jaCeeYvVrmkJJGpRVKbso4xTKGKuNA5bJZy9bjpB5Prm2gYApzb2J1uS1UycfwTwpmWgNa1sqUCoPMc1a4/a0ot34yAqfiRZKtoSC4oPnLaS5RmJKskFDpcUHV1fJVl8TUYlhsKYlMOnp9cm1TFQio3hVIMeDsFrj9hxPtEjGzB1SeELxWwafuURaJVmrGMBfrm3AL4sAx02V32ZJozXp8btJNynqAgYzanI4tak1Xu9xcGNjTL0WoFD6B2U3Lp3O9HqZdcgmU6ttNs0thbSiuWFGjU1dYPLynbRMTANOb6nM0ayExgu1DXZt1PDKnC2h9L/npIRCYqXy31y+QgLUcsDnzqnHkzj7k6IUnNFSmZF0DpOWiQI2zbFBZT8C0ettH9G1yYlQhsSHpC+URdNqOHV2g5TgHLBsapBTmmwR90krsMmmuf6MXKeMjJyePdNPlS+LMtH9InHjqVfd5kook+jyaODyVS2S0CdHmIbikoUVkpHtJFT6TNbNyMwwRUZkUuM3WJDF0Hov1IH2HFJvyZBDoSS9rpSaUGCbUoqbLlgsQWo5QgE3ntmAknmdMVnQ4KPGn5nZ2Iy8i6HgzJbKrCz6GyKSk8gi10JJPByfUFa21NNULYOCuaShwmJls1+6OqOglGLNrIqM7ZqYEZko4D1LKjIeu+b1daK1m/S+xSuUs+Y3SaHOA2tm+qVtMrpNeM+SioyVy4xFmy2fYjKrLnO/vDrcnUiKOlAxC1EoSbIYSyjxuMdfnD1Puji5ryv8xYpqYo7oJBWz6vwsn5K5sA4jc2+kOaOlavKW0xod7k50bYZX8kITyjjzoUyvr2DlrDopvXlg6bQKZkiukxEo4IyWKjK58sDq6OjI2Jutn+Zx/zYTdLq5YTU62tuf8X7oXjJ6MAv0wBYSwxM3j3yc2JJGjXnM8H1ihnzWkGTRyY9H3wdHKTUkSbVSsHJWvXRx8lhpVjT72bwvLN2dIRfGZP20OJ0ZrP8ZXVSzsUXRWJnmr4DW6EgI7XknKupo22cW1RiKYtn0GslTmic8DUuabMTmQ2msNNkwM7Nr6jL6bpahWNeSzui5Rsf6EoOtJxRQEkKJOR5rFjYh4SX5wVCwtiVAVMZNSKoxrGvxY2d4dbWR6S95wWwTjIm8re7fZa+/a5MsicF/i0goQ7574vE5CyRpTz45a1YFknE6uUgaXDA785umZTx3wMZZJlOrxjtCrNGxyMiuzRBJFJlQhoXez6gLUlNRoFn8y4TqgCWDsEk0V1tsnJX565FxmZjAhfMC44o81PEoaO/EGMNYQimmLk/SLM+iqZJNrRBY2FB4yc/zgUJz8fwg2VBrxmWiFFw238awxr552omA9obsajemUCgyofSfU3NtUMb+8l6BoLnKkjgfwLB8XDovO9ciKynSljfCijE26NJONGk/X0pWKIahaKrwyUxOnvE01PtNZCNRWDHFZHljlkSVjTdVwBULUstEu7GkOA1KWige0FjtkyKcZxTQWGGU/QpipRRXLgxkrTxmTSaXzjOprAgME4lzIsgreVuIdIRSBIOyngcN1QGJcSgAmzRWmHhlPqNTEfBzyVyjuGQCUOtTvG/xCQtqzyURJpqq8qUhlCIYlHW1pipgiUvy7xKqfAq3jJsmCnjf4gC1WdznKmsyUQqumKdQppUYaB0MYx9MiJqZFkoBC8XTELTzkLlfGEHAZ5V1y0QZZqI+ZvGXLaslfUmDwfoWu3+NylgVtTSFojVYpsikELCN8k6TtGG2nyWN2S2L2U0rr+Ha5X6e3B/Gc93+RXCjLbrr/4PE6jySF9UNLp5LXnSnkhb8pViMVwiLAw3DYE9rL/UVPoZ08VIV6+G/mopRNkrUJ/5JeYwe834k/tEpul569A/VepwVUY/yFU7+ncY+VveXieGvj18Pu1s15ap1w7S4drl/aBHMAqq9vT2rwnY8uP73YXYe7kkqmzqpkAx/nFwg9ZCKpoe8rpMkQdLjocfo5OOHHKvHfKyHVPBRjk8WwPDP6n8cjbt4AxG+w45Pfs8T56aHnTspnk/1eKzvO/RYnfJ6j/KeEzpu2PP9f6dTnfvgccnPeymENPC+XooyMezz0Sd+dJJeU5afilOvwF9dW5YyWTa9mv+8zEe2e9xZ3/DGVHDzuQ188t7QYKXKWgtFDfsFK4AWit82QRsjxJhKKEOEOaLypahIIyQ28rXR5dL/XVMdP4bU9SjfYaQohp6fHuucRjk/nUr+o54fKcQMyvJRseoKlL889yoyDIPPn12HZfRl/7Oy/QFKwcY5fuY0BYeMN2RtDKWIQ++HnF86m6Urxtwsfcg1gv4NwoYPiDPmPVDjiv5VQ89vyGcx9ndLeg+V6l6l+r7DysDANVSWj4rV5SsSgDmNlWyck5s8uDnpRgYsxS1nNyRuci6EQpEJZdjr+REKRSYUxhaK7U+IxFe+IjEMg1vX1RDI0YabOZGJAi5eGGReQ+WIgidCEaFkWiiJrs1lZS0SgLkNAS7KYsRrXmQC/a2TDY0owxShiFCyJxTLT1BEglIGt5zXSMDKXchkzmSigEvm+1g2oyplwRt7l7zSD70f8XhYgqW0hMJkhELhCIXxCUXZASpWXoryBctaJADLZlRxyfzcrgvL6dS731TcdnYtpmmNUyjlE3o/pFJNcivSwc9UkxFKAQ3KqpMLRdkBgisuEpEApmnyt2fX4DdVTj8353E8G+cGWDe3KkVFyLJQKDKhJL2eP6FQBEIxUHaQwLLzy75rk0Czbk4VG+bmfvfInMvEUvCl9XUE/PaoBU+EIkIZl1AUKDtAYOkmDH+leAQI+Gy+tL4WS+X+s/MSYbx8is2VS2uTpopFKDkRSikMyiYJxbACBJZsFJEkXbIrl9axfEp+UlQqrbO/lDLVRl/tYc377+vjeF8k8cQoEZV61HD7yYbej4y6zHfo/ZhRpSNC74d/FmUVKassH4Elm6Rrk0RjVYB7r66g3j+yWVJfX5/1z8/b2qf6oOKjpwUx1Ni/ZNkblE0aZOw/ppiy3o/8LHIUKUt+WyhKgeUjsORdIpLkiqwUH1sdoM6v8vcd8vXBCrhusWLV9ApOrMiaiFDKO/Q+v0LJY5fHtAkueZfM2iSjNaumB7lucX6z3OZ1VbZlKG4504dt26MXsFGFQmaEQpEJJel1pVR5BbaZNsGlIpLh2D6bW9cEsPK8bWTeUzysaja4fkXlUKOKUCRSdvhnmTbBpZtQdu6nPAsZBVy/opKVU1Tev0veZaKAm1aazG8a9msjQhGh9H+WsnwEl2wUkaRgflOQm1aa5F8lBSATgEpb8cV1AQzLzr9Qijj0Pn9CIWtCUZaPwOINIpJUldfy8cWz/FTahaCSApGJUrBmmsHHVlWMTHiba6EU8aBs/oSSjUHZRBoB/ynnikhS1RngY6uCrJluFsxOhQWTFlMBN6wwWTylIrVtpMtDOXV5lOXHv+BslC2DralYMrWCG1YURvem4GQCib1N/uk8P0G/LUIpY6EkRHKWzNqMQsC2+Mo5fqp8haSSApMJwCkNBjefVYmZaosIEUqJC6W/azN/rYhkFEzD4NZzqjmlsfBy7RfcN1LA+xeZbJo3ynqLCQmFsh+UHf2ajEMoTEYoTFgoyvLhny8tkrHYtKCK9y4szC3YC3IrEVPBP57jY05DcJJCyVTofZEJJVOh92oyQplY6L0y7USLRAZbR2VOQ5B/PNvOy4rgopUJQI0Pvr7BT1XALhyhSIKlNIRy8i6PiOTkVAV8/NvGADW+wv2OBb3J2dImk1vWVWGZZmEIhSITStLrhZoPRZk+fAtEJGNhmSa3nV2V9e09S1omCrh6gcEHVlSNcZAIpViFokwb3/wzUZZfjDEGH1hexZ/NVwU5TlI0MgEwFNx8usl582qSKoMIJW9CydAsj7JsfPNEJGOhlOK8eTXcfIaJUegmKQaZAPhMxb+ca7KkOciom1XnQyhFOsuTv/QF/f/P8uGbe4aIZEw0S5qD/Ot5Fj6zCExSLDIBqPMrvr4xSHP1GH1rGZTNzaDsJISiLBvfnNNEJCehuTrA1zcGqS3gAdeilYlSijnVcOeFVVSPtd9hrhMsUWRCSXo910IxTB++WatFJCehOmBx54VVzKlm9K69yGSyQoFVjfCvm6qw7UwIBRFKjhIsKcuHPWulzNqcBNuy+NeNVaxqpGAW8JWkTAbYMNPkH9ZXYxiGCCUDQhlyflkQijJ92C0ikpNhmib/sKGKDS1mUX7/opSJUnDlfINbz67GNM3CEorkQxl6zUwbe9YKlC1dm5OJ5Nazq7lyfuGkFCgLmQyU3euWmHxmbS2WVUBCKeLQ+8wKJRFHYreslDGSk2BZiXJ87eLCXHNT8jKBRHr/jy6DT55ZV3hCKfMES8qwEi0Sq4imI/Ikkk+eUcNHl3Fi25ciRbW3t2d9E65sbwDkevCNpzr47gudOK47+oHj3ugr+fEkNvpK8ZkFvdHXsNcHz2+CG30pw8SeuRxlikjGFIlp8sk1ddx2bj1mln/WU22El2mKumUygGnAjSvgM2trMY0CG0Mps0FZw7CwZ4hITl5mDT5zVi2fWKazLpJcUSKnkQi7/9hyxW3nyCxPvoSiDAtr5jLp2pysrBoGt51Tw0eXglkMcfLlJpOBon3tYpN/2lSDbWUqDgVJsDTqNTlxjDItrBlLpEVyEmzL4p821XDtErPox0hKWiYDZfzKeSZ3XlhNddCXAaFI6P2YklUKZdhY0xaLSE5CTUWAOy+s5sp5hZUIWmRyEqFsbDH4zqXVNFf7hw4g5lMoFJlQkl4fTSjKtLCmLZKuzVhoTXO1n29fUsnGFqNo40jKUiYDrGyA711aydJpVRTUauMSEYoybazmhSKSsU3C0ulVfP+yKlY2lPaZlrRMlIK5NfDdi/2sn1839oEilHELRQ2KZIGI5CSsn1/Hdy8KMKdal2yLpCxkMlCx6/yKb260uG51bWGlgBwml6LJh2JYIpKTYJkm16+u45sbLer8xbX6V2RyEnwm/O2ZFl9aX1NASaqTUiEUg1CUSoyRNM9HmbYYYxSqAjZ/v6GW28408RXnmj2RyUlPVsF7Fxr84PLqDG2jUV6h98qwsKbMAxHJqMxpCPKDy6t4zwJVFKkWRSaTQAFLGxR3X1HBBQtrUge4SWDbyO9jmCKSsSqSYXD+whruviLI0obiXrAnMpkgNX74xgabL55XS9AnexuPJRSlTKymeWBaYo0UBH0WXzyvlts3WNT4y1EjZS4TAMuADywy+Om7a1gytXLkaLsIJTFG0jRXRJICpWDptEp+elUNH1hkYJVbv0ZkMrJAnFIHP7o0wA1n1KGGV5oyTrCkDAurYbaIJFW5MSxuOKOOH14S4JRaVfLTviKTCQil0obPrjb5/uU1zG8KDpsNLb98KMowsRpniUhSlJWFUyr4/hU1fHa1SaVdfLlaRSY5Kihrpir+64oKPnJaHbZtMxg5W0ZdHmVaWPUtYIhITqCxbZuPnFbHf15RwZqp0hoZjpSWFFTZ8PnTTC6cXc3tW6O8+k4YT3uJCjeQJEmpwTU/Sqn+REL9lXzI44HjAa2G/G3i75LfD1ADSZPU0Of7Hyde7n+epGNHfO7Qx4mPV2Meg1IoZWDWzZAWSRJKGayeEeTWNX5WNiqU0nJRUl2nUsi0BtnLJOV4mp/vhh+93Mfx3kjiyVLN2KYMrLrp0iJJorE6wA2nVnHNIi9rA6zFXD9EJhNEA50R+I/XDH6zo5NILJZSCqmFkkoGaQhl8G+yJBRlYNVNE5H0X5OAz8e7l9XymZU6EQ4v9eOkyJjJOFBAfQBuv6iW+69v4bwFjf3BbjnOh5KtWR7DFJEMVAjD4LwFjdx/fQt3XFRHfZZFUkpI6ZmgVJY3mfzn1Q08ub+Kf3u6ix2HupLGU0YbQ4GR4x9MfAxF9b9nBsdQFAqzdioYZbSIJNW9VYrlM2r423NrWT/LhyU/syKTnFw0Be+a4+OcmU08vLeWO7Z0sPdYD57nZV8omRyUVQZmTXNZi8QwDOZNqeLms2u5dL6/rBbmiUwKCL+luHKhjwvnNfPI3nrueLqdfcd78fq32yhooRgGZvWUshWJYRjMbarklnPquWieTcCUqV6RSZ5RCoKW4t2LfFw0bypP7K/nm1vaef1wCNdzC1MoKMyaJlDlJxLTMFkyrYLPn13Phtk2AUvJmEim6oLWOuuzObkYSS6UEXGtwdWw9Sj8fEeEzfv6wI3jjZhtydMsj1KY1Y1lJRIFYFhsnBvk2mU+1jSDqcYXuVoqMy25OA9pmWS64KrEmMq6abBuWoBdHX5+95bDr3b20dsXIa+DsoaBWVlfViKpqgjy3sV+rpxvsLhODd4jQWRSVFIBWNKgWNxgc+OqWh5+u5pf7wrz2tEonhM7EeqRi0hZNSCS0p6mUIBh2axotrlqUYCL5yhqfDK9KzIpoQJe64P3LzJ438JKtrdV8OBbMf77zT4Od8dQ2hv0RzaEogwTo6K2ZEWSGAYymFZjc9H8IJfMNVneMCz8Rsj+fZAxk/ych9bgAk8ecHlkX4xn9vdxPBQH1zlRAzIReo8qUZFolDJpqrQ5q8XPRXNM1s80xj0WUqrlKp/nIS2TPKFU4uK/a7bJptlBXC/IEwcdNh9WvPh2N/s7wonBVK9fEhNpoSRvJB6sKRmRDEQJz673c8asKjZOd1k/Q2Ea0gIpBEQmhVBJSGR9O3+2xXtX1+N6jew47nD/zl6ee7ubN49FCMUc0C7aG++grIERrC56kSjDpNJnsLDRz9rZlbxncZCljRamAZ05+EUXRCZFLhbFqmablc31eLqe7qjHMwejbH4rxIsHezjQHqUvGktE3KYUioERrCoykSRaVEopqgI+ZtbanD6zgk1zA6ybYVPjT2R7lxaIyERIUyymgvqAweULg1y2MIirm+joc9ndFuf5A308ezDC7sNddEc9orEYGKDsyoIXycCCSL/PpsYPpzRXcdYMmzUzA5xSb9JQYYg8RCZCNuViKZhSadJUYXLu7AAaCMen0xZy2Nfp8EaHyyutDjvbXQ619xHzDKKxKFp7g8Mp2R9yPzEjnVisbOD3+fEZLjMbKlnaYHDqND8LGizm1ho0Bk2ClhpcKylxICITIZdiScpmUGErKupsWmptzpvDYPh8n9NIW9ijLRSnNaw4Hta80xXhzbYoh/sMWkMunT0hIq5CKyPRmtEe2vPQWg/NzcKJVAlKKZRx4nilPQKmpq66kuZKk2kVHgsb/cyoDdAUVDQHNY2VNo1BRYVFUrdsZMtDRCIyEQpIMAP/p9KGSttgVrU/KZWKP2kq0iTm+gg7Hn1xTcRVRB0PxwNHg+dpPH1CJYYCw1BYKjFg7LcUAVNRYUPQMpJW3JrU19cOmbEeuY2I3C+RiVDckhmGzwSfaVDrH3gmc2MtKfdpF0oWSQEjCEJGEJkIgpARRCaCIGQEkYkgCBlBZCIIQkYQmQiCkBFEJoIgZASRiSAIGUFkIghCRhCZCIKQEUQmgiBkBJGJIAgZ4f8HvjJEQ3rAXo4AAAAASUVORK5CYII=';

export default class UserManageView extends React.PureComponent {
    constructor (props) {
        super(props);
        const user = JSON.parse(localStorage.getItem('user'));
        this.state = {
            auth: user.auth,
            admins: [],
            customers: [],
        };
        autobind(this)
    }

    componentDidMount () {
        if (this.state.auth === 'ADMINISTRATOR')
            this.getUsers();
    }

    getUsers () {
        request("/users", "GET")
            .then((res) => {
                if (res.ok) {
                    const admins = res.data.filter((x) => x.auth === 'ADMINISTRATOR');
                    const customers = res.data.filter((x) => x.auth === 'CUSTOMER');
                    customers.map((x) => x.checked = false);
                    this.setState({admins: admins, customers: customers});
                } else {
                    throw new Error(JSON.stringify(res.data));
                }
            })
            .catch((e) => {
            console.log(e.message);
        });
    }

    prohibit (valid) {
        const data = {
            userids: this.state.customers.filter((x) => x.checked).map((x) => x.id),
            valid: valid,
        };
        request("/users/prohibit", "POST", data)
            .then((res) => {
                if (res.ok) {
                    this.getUsers();
                } else {
                    throw new Error(JSON.stringify(res.data));
                }
            })
            .catch((e) => {
            console.log(e.message);
        });
    }

    ban () {
        this.prohibit(false);
    }

    lift () {
        this.prohibit(true);
    }

    setCustomer (i, what) {
        const v = this.state.customers.slice();
        v[i] = Object.assign(v[i], what);
        this.setState({customers: v});
    }

    render () {
        const allChecked = this.state.customers.map((x) => x.checked).reduce((s, x) => s && x, true);
        return <Container>
            <HeaderInfo/>
            <hr className="bordered-dashed"/>
            <Row>
                <Col sm={3}>
                    <SideBar defaultActiveKey="/users"/>
                </Col>
                {this.state.auth === 'ADMINISTRATOR' && <Col sm={9}>
                    <Card>
                        <Card.Header className="text-black fs-5">
                            管理员
                        </Card.Header>
                        <ListGroup variant="flush">
                            {this.state.admins.map((x, i) => <ListGroup.Item key={x.id}>
                                <Row>
                                    <Col sm="auto">
                                        <Image roundedCircle={50} width={50} height={50} src={x.image ? x.image : DEFAULT_PHOTO}/>
                                    </Col>
                                    <Col>
                                        <Row className="mb-2 fs-4 justify-content-between">
                                            <Col sm="auto" className="text-black">
                                                {x.username}
                                            </Col>
                                            <Col sm="auto" className="text-black">
                                                {x.email}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)}
                        </ListGroup>
                    </Card>
                    <br/>
                    <Card>
                        <Card.Header>
                            <Row className="text-black fs-5 justify-content-between">
                                <Col sm="auto">顾客</Col>
                                <Col sm="auto">
                                    <Form.Check type="radio" label="全选" checked={allChecked}
                                                 onClick={() => {
                                                     const v = this.state.customers.slice();
                                                     v.map((x) => x.checked = !allChecked);
                                                     this.setState({customers: v});
                                                 }}/>
                                </Col>
                            </Row>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {this.state.customers.map((x, i) => <ListGroup.Item key={x.id}>
                                <Row>
                                    <Col sm="auto">
                                        <Form.Check type="radio" className="fs-5" checked={x.checked} onClick={() => {this.setCustomer(i, {checked: !x.checked})}}/>
                                    </Col>
                                    <Col sm="auto">
                                        <Image roundedCircle={50} width={50} height={50} src={x.image ? x.image : DEFAULT_PHOTO}/>
                                    </Col>
                                    <Col>
                                        <Row className="mb-2 fs-4">
                                            <Col sm={3} className="text-black">
                                                {x.username}
                                            </Col>
                                            <Col sm={4} className="text-black">
                                                {x.email}
                                            </Col>
                                            <Col sm={3} className="text-danger">
                                                ￥{x.account}
                                            </Col>
                                            <Col sm={2}>
                                                {x.valid && <Badge bg="primary">可用</Badge>}
                                                {!x.valid && <Badge bg="danger">禁用</Badge>}
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </ListGroup.Item>)}
                        </ListGroup>
                        <Card.Footer>
                            <Row className="justify-content-end">
                                <Col md="auto">
                                    <Button size="lg" variant="danger" onClick={this.ban}>禁用</Button>
                                </Col>
                                <Col md="auto">
                                    <Button size="lg" variant="primary" onClick={this.lift}>解禁</Button>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>}
            </Row>
        </Container>
    }
}
