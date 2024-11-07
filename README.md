# **Tech Evaluation 2024**
An about-us page with backend (server and database). Front end uses `React`, `CSS` and `HTML`. Backend uses `Flask` and `sqlite`.
### About-us with Backend?
Yes. The initial idea was to use `Flask` to deal with the repeated profile views integrated with `HTML`and `CSS`.

Then I thought of learning `React` as a constructive challenge to this evaluation project. After developing the entire backend and going into frontend, I only came to the realisation at that point that `React` can repeatedly use the same component for the profile view.

So, the whole backend was redundant. However, in the end I created a full-stack website even with embeded images in base64. While doing so, I learnt `React`.

## How it Functions?
Server (backend): `localhost:5000`

Client (frontend): `localhost:3000`

Client is able to use `GET` request to retrieve member's data, department and position along with their photo. Due to them being 2 different websites, `Flask CORS` enables browser to safely load resources from different origins being the 2 different `localhost`.
