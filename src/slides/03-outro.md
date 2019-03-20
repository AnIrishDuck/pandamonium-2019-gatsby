# Conclusion

<!--
So after, working with Gatsby a bunch, what do I think?
-->

---
## V1 -> V2

https://www.gatsbyjs.org/blog/2018-06-08-life-after-layouts/

<!--
My experience overall has been very positive, with some definite downsides.

Part of this is inevitable for a new product moving quickly. Gatsby recently
released a new version with some incompatibilities.

The biggest one that bit me the hardest was the removal of layouts. I think this
is a positive change. The old layout magic was very against the spirit of
React's modular components. But I had to understand that magic to fix these
slides.

To be fair, it was easy to find great documentation about this change, the
migration path, and the justification. This has been the norm with Gatsby. The
documentation is amazingly good for something this bleeding edge.

-->

---

## Pain

- https://github.com/fabe/gatsby-starter-deck/pull/12
- https://github.com/fabe/gatsby-starter-deck/pull/XXX

<!--

That said, I had to open not one but two pull requests for the community "deck
starter" to get it in line with v2 of Gatsby.

Gatsby already has a vibrant and growing community, which is a good thing. The
downside is the creator of this starter was a bit new to Gatsby and did some
things that the documentation explicitly recommends against ... now.

I'm still really hopeful for the future though. Gatsby and similar approaches
give us the capability to build "isomorphic" sites. I think that trend is
coming.

Gatsby markets itself as a "static site compiler". They want your exact same
sites to build and load faster and faster with each release.

-->

---

## Hope

`iframe:http://search.gauge.docker?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImF2YXRhciI6bnVsbCwiZW1haWwiOiJhZG1pbl9hZG0wMDBAbm93aGVyZS5jb20iLCJoaWdoX2NvbnRyYXN0IjpmYWxzZSwiaWQiOjIsImxvY2FsZSI6bnVsbCwibmFtZSI6IlRlc3QgdXNlciBBRE0wMDAifSwiZXhwIjoyNTUzMDM5NTI4LCJyZWZyZXNoX2V4cCI6MTU1MzIxMjMyOCwicm9sZSI6ImFkbWluIiwidG9rZW5faWQiOiJjM2RkMzA2OS01YWQxLTRlZmQtOWQ0NS05OTkyNmZkOGU5NWQifQ.5ad564XeC21KLZ_dzjh_XvAMyvgqLLhU8ZNVQnFHEvTWjiL4_sZ6Yz60YHmupKAwuu6XuqYhSrjMxheP2-hKtA`

<!--

To use an example from recent memory, the Gauge developers have spent tons of
time optimizing their loads.

Obviously Gauge is a very dynamic application, and you can't just smash
Gatsby in and expect it to work. That said, if Gatsby or something like it could
be used to constantly optimize first loads with little development effort ...

I think that'd be a pretty amazing thing.
-->

---

# Fin

> So we beat on, boats against the current, borne back ceaselessly into the past.
> <cite>F. Scott Fitzgerald</cite>

<!--
Thanks everyone for your ears, eyes, and time.
-->
