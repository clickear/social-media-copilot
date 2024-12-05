import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { throttle } from "lodash";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Processor } from "./processor";
import { TaskDialog } from "@/components/task";
import { LimitPerIdFormField } from "@/components/form-field/limit-per-id";
import { parsePostId } from "../post";
import { TextareaArrayFormField, textareaArrayTransform } from "@/components/form-field/textarea-array";

const formSchema = z.object({
    limitPerId: z.coerce.number().min(1, "请输入需要导出的评论数量"),
    postIds: z.string().array().or(z.string().trim().min(1, "需要导出的数据不能为空").transform((arg, ctx) => textareaArrayTransform(arg, ctx, parsePostId))),
});

export type FormSchema = z.infer<typeof formSchema>;

export { Processor };

const storageKey = "comment-batch-export-limitPerId";


export default (props: {
    post: {
        postId: string
        commentCount: number
        title: string
    }
}) => {
    const { post } = props;

    const taskRef = useRef<React.ComponentRef<typeof TaskDialog>>(null);

    const form = useForm<FormSchema>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            limitPerId: post?.commentCount || parseInt(localStorage.getItem(storageKey) ?? "100"),
            postIds: post ? [post.postId] : []
        }
    });


    async function onSubmit(values: FormSchema) {
        if (!post) {
            localStorage.setItem(storageKey, values.limitPerId + '');
        }
        taskRef.current!.start(Processor, values);
    }

    return (<TaskDialog ref={taskRef}>
        <DialogContent className="max-w-[600px]" aria-describedby={undefined}>
            <DialogHeader>
                <DialogTitle>
                    {post ? <>导出笔记<span className="text-red-400">{post.title}</span>的评论数据</> : <>根据笔记ID或链接批量导出笔记评论</>}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form className="space-y-6 py-4">
                    {!post && <TextareaArrayFormField
                        control={form.control}
                        name="postIds"
                        label="笔记ID或链接"
                         description="支持输入笔记ID或链接，可使用App分享链接"
                    />}
                    <LimitPerIdFormField
                        control={form.control}
                        name="limitPerId"
                        description={post ? `当前笔记共有${post.commentCount}条评论` : '每条笔记需要导出的评论数量'} />
                </form>
            </Form>
            <DialogFooter>
                <Button onClick={form.handleSubmit(throttle(onSubmit, 3000))} className="w-full">开始</Button>
            </DialogFooter>
        </DialogContent>
    </TaskDialog>
    );
}