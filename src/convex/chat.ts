import { query, mutation } from './_generated/server';
import { v } from 'convex/values';

export const sendMessage = mutation({
	args: {
		user: v.string(),
        body: v.string()
	},
    async handler(ctx, args) {
        console.log("This Typescript function is running on the server.")
        await ctx.db.insert("messages", {
            user: args.user,
            body: args.body
        })
    }
});

export const getMessage = query({
    args: {},
    async handler(ctx, _args) {
        const messages = await ctx.db.query("messages").order("desc").take(50)

        return messages.reverse()        
    },
})
